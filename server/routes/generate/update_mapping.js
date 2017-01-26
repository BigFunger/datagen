export function updateMapping(callWithRequest, dataplan) {
  return loadMapping(callWithRequest, dataplan)
  .then((dataplanResponse) => {
    if (!dataplanResponse) {
      return createMapping(callWithRequest, dataplan);
    } else {
      return changeMapping(callWithRequest, dataplan);
    }
  });
}

function changeMapping(callWithRequest, dataplan) {
  throw `Updating the mapping is not yet implemented. Delete your index using: DELETE ${dataplan.indexName}`
}

function createMapping(callWithRequest, dataplan) {
  return callWithRequest('transport.request', {
    path: `/${dataplan.indexName}`,
    method: 'PUT',
    body: dataplan.mapping
  })
  .then((response) => {
    return response;
  });
}

function loadMapping(callWithRequest, dataplan) {
  return callWithRequest('transport.request', {
    path: `/${dataplan.indexName}/_mapping/${dataplan.typeName}`,
    method: 'GET'
  })
  .then((response) => {
    return response;
  })
  .catch((er) => {
    if (er.statusCode === 404) {
      return undefined;
    }
    return er;
  });
}
