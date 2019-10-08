<script>
import Layout from '@layouts/main'
import NewContent from '@components/content'

export default {
  page: {
    title: 'MAIN FEED',
    meta: [
      {
        name: 'description',
      },
    ],
  },
  components: {
    Layout,
    NewContent
  }
}
</script>

<template>
  <Layout>
    <div v-if="!isLoaded" class="text-center">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
    <div v-else>
    </div>
  </Layout>
</template>


