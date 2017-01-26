import _ from 'lodash';
import uuid from 'node-uuid';

export function generateData(callWithRequest, dataplan, server) {
  const promises = [];

  for (let i=0;i < dataplan.numberOfDocuments;i++) {
    promises.push(indexDocument(callWithRequest, dataplan, server));
  }

  return mapSeries(promises);
}

function indexDocument(callWithRequest, dataplan, server) {
  console.log('getting to indexDocument');
  const datasourceClasses = server.plugins.datagen.datasources.datasources;

  console.log('**************************************');
  console.log('data source classes');
  console.log('**************************************');
  console.log(datasourceClasses);

  const body = {};
  _.forEach(dataplan.datasources, (datasource) => {
    console.log('**************************************');
    console.log('datasource.typeId');
    console.log('**************************************');
    console.log(datasource.typeId);

    const GeneratorClass = datasourceClasses[datasource.typeId].class;
    const generator = new GeneratorClass(datasource);
    _.assign(body, generator.generate())
  });

  console.log(JSON.stringify(body));

  return callWithRequest('index', {
    index: dataplan.indexName,
    type: dataplan.typeName,
    id: uuid.v4(),
    body: body
  });
}

function mapSeries(arr) {
  if (!Array.isArray(arr)) throw new Error('mapSeries requires an Array');
  const length = arr.length;
  const results = new Array(length);

  arr.reduce((chain, item, i) => {
    return chain.then(() => item).then(val => results[i] = val);
  }, Promise.resolve())
  .then(() => results);
}