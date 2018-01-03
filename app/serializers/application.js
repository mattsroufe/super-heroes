import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.data.results;
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload[0];
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});

