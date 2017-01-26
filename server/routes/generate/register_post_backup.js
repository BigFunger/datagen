// import { random, reduce } from 'lodash';
// import { callWithRequestFactory } from '../../lib/call_with_request_factory';
// import uuid from 'node-uuid';
// import { randomItem } from '../../lib/random_item';
// import { updateMapping } from './update_mapping';

// function mapSeries(arr) {
//   if (!Array.isArray(arr)) throw new Error('mapSeries requires an Array');
//   const length = arr.length;
//   const results = new Array(length);

//   arr.reduce((chain, item, i) => {
//     return chain.then(() => item).then(val => results[i] = val);
//   }, Promise.resolve())
//   .then(() => results);
// }

// const user_id = [
//   "jim",
//   "joe",
//   "shaunak",
//   "adam",
//   "jack",
//   "janet",
//   "chrissy"
// ];

// const totalDocuments = 1000;
// const startDate = new Date('1-1-2017');
// const startMS = startDate.getTime();
// const endDate = new Date('1-19-2017');
// const endMS = endDate.getTime();
// const range = endMS - startMS;

// function indexDocument(callWithRequest) {
//   return callWithRequest('index', {
//     index: 'jim-index',
//     type: 'user-logged-in-time',
//     id: uuid.v4(),
//     body: {
//       'user_id': randomItem(user_id),
//       'time_spent_in_application': random(1, 1000),
//       'date': startMS + random(0, range)
//     }
//   });
// }

// export default (server) => {
//   server.route({
//     path: '/api/kibana/datagen/generate',
//     method: 'POST',
//     handler: function (request, reply) {
//       const callWithRequest = callWithRequestFactory(server, request);
//       const promises = [];
//       const dataplan = request.payload;

//       console.log(JSON.stringify(dataplan));

//       for (let i=0;i < 1000;i++) {
//         promises.push(indexDocument(callWithRequest));
//       }

//       return mapSeries(promises)
//       .then(reply);
//     }
//   });
// };
