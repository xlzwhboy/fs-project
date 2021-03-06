import base from './base'

export default {
  list (param, tips = {}) {
    return base.post('/menu/list', param, tips)
  },
  tree (param, tips = {}) {
    return base.post('/menu/tree', param, tips)
  },
  delete (ids, tips = {}) {
    return base.post('/menu/delete', { ids }, tips)
  },
  config (tips = {}) {
    return base.post('/menu/config', {}, tips)
  },
  save (param, tips = {}) {
    return base.post('/menu/save', param, tips)
  }
}
