import { HttpParams } from '@angular/common/http';

export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();
  if (req) {
    Object.keys(req).forEach(key => {
      if (key !== 'sort' && key !== 'filters') {
        options = options.set(key, req[key]);
      }
    });
    if (req.sort) {
      req.sort.forEach(val => {
        options = options.append('sort', val);
      });
    }
    if (req.filters) {
      req.filters.forEach(val => {
        options = options.append(val.key, val.value);
      });
    }
  }
  return options;
};
