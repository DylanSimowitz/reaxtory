import {observable, computed} from 'mobx';

export default class UiState {
  @observable title = 'woow'
  @observable pendingRequestCount = 0
  @computed get isLoading() {
    return this.pendingRequestCount > 0
  }
}
