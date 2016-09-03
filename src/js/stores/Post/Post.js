import {observable, computed, action} from 'mobx';
import api from 'utils/wpapi';

export default class PostStore {
  constructor(ui) {
    this.ui = ui
  }

  @observable posts = []
  @observable stale = true

  isStale() {
    if (!this.stale) {
      setInterval(() => {
        this.stale = true
      }, 1000 * 60 * 5)
      return false
    }
    return true
  }

  fetchPosts = () => {
    if (this.isStale()) {
      this.ui.pendingRequestCount++
      api.posts().then(data => {
        this.posts = data
      }).then(() => {
        this.stale = false
        this.ui.pendingRequestCount--
      }).catch(err => {
        console.error(err);
      })
    }
  }

  reloadPosts = () => {
    this.stale = true
    this.fetchPosts()
  }
}
