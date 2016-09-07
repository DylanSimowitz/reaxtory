import {observable, computed} from 'mobx';
import camelcase from 'camelcase';
import api from 'utils/wpapi';

export default class UiState {
  constructor() {
    api.customizer = api.registerRoute('reaxtory/v1', '/customizer')
    this.customizer()
  }
  @observable pendingRequestCount = 0
  @computed get isLoading() {
    return this.pendingRequestCount > 0
  }
  @observable styles = {}
  @observable contact = {}
  customizer() {
    api
      .customizer()
      .then(data => {
        if (data.body_typography) {
          this.styles.body = Object.assign({}, ...Object.keys(data.body_typography).map(key => {
            return {
              [camelcase(key)]: data.body_typography[key]
            }
          }))
        }
        const {phone_number, address, email, twitter, facebook} = data
        this.contact = {
          phone_number,
          address,
          email,
          twitter,
          facebook
        }
      })
  }
}
