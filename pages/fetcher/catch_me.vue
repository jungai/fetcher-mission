<template>
  <article class="container-page">
    <popup
      :is-error="is_error"
      :title="popup_title"
      :body="popup_body"
    ></popup>
    <div class="container">
      <fetcher-header
        title="Catch me if you can"
        uri-path="/"
        bg-color="bg-red"
      ></fetcher-header>
      <main>
        <div class="row">
          <div class="search-result">
            <button
              class="submit-btn"
              @click.stop="touchMe"
              v-if="!loading"
            >
              Touch me !
            </button>
            <button
              class="submit-btn"
              @click.stop="touchMeAgain"
              v-if="!loading"
            >
              Touch again !
            </button>
            <p class="text-result" v-if="loading">Loading...</p>
            <p class="text-result" v-if="!loading">Found {{ foo_data.length }} result</p>
          </div>
        </div>
      </main>
      <main
        class="col"
        v-if="!loading"
      >
        <contact-card :items="foo_data"></contact-card>
      </main>
    </div>
  </article>
</template>

<script>
import FetcherHeader from '@/components/FetcherHeader'
import ContactCard from '@/components/ContactCard'
import Popup from '@/components/Popup'
import { mapMutations } from 'vuex'

export default {
  components: {
    FetcherHeader,
    ContactCard,
    Popup
  },
  data () {
    return {
      loading: false,
      foo_data: [],
      is_error: false,
      popup_title: '',
      popup_body: ''
    }
  },
  mounted () {
    console.log('STATE ->', this.$store.state)
  },
  methods: {
    touchMe () {
      if (this.loading) return

      this.loading = true

      this.$axios.$get('https://reqres.in/api/unknown/23')
      .then(res => {
        console.log('must be apply --->')
        this.loading = false
      })
      .catch(err => {
        console.error('i got ->', JSON.parse(JSON.stringify(err)))
        let { status, statusText } = err.response;
        this.is_error = true
        this.popup_title = `${status} ${statusText}`
        this.popup_body = statusText
        this.loading = false
        this.show_poup()
      })
    },
    touchMeAgain () {
      if (this.loading) return

      this.loading = true

      this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        let data = res
        this.foo_data = data
        this.loading = false
        this.is_error = false
        this.popup_title = 'Yea! I have some'
        this.popup_body = `I have ${data.length} data for you`
        this.show_poup()
      })
      .catch(err => {
        let { status, statusText } = err.response;
        this.loading = false
        this.is_error = true
        this.popup_title = `${status} ${statusText}`
        this.popup_body = statusText
        this.show_poup()
      })
    },
    ...mapMutations({
      show_poup: 'popup/show'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_flex.scss';

header,
main {
  padding: 1rem;
}

button {
  &.submit-btn {
    width: 150px;
    height: 60px;
    color: white;
    font-size: 1.25rem;
    background-color: $color-green;
    border: 5px solid darken($color-green, 10);
  }
}

.container {
  width: 100%;
  height: 100%;
  max-width: 990px;
}

.row {
  lost-flex-container: row;
}

.col {
  lost-flex-container: column;
}

.text {
  &-result {
    font-size: 1.25rem;
    color: $color-dark-grey;
  }
}

.search-result {
  min-height: 200px;
  @extend .col;
  justify-content: space-between;

}
</style>
