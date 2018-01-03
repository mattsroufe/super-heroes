import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalize(typeClass, hash) {
    hash.dates.forEach((date) => {
      hash[date.type] = date.date;
    });
    delete hash.dates;
    return this._super.apply(this, arguments);
  }
});
