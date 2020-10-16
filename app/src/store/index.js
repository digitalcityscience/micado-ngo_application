import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import Organization from '../models/Organization'
import Course from '../models/Course'
import flows from './flows'
import auth from './auth'
import glossary from './glossary'
import language from './language'
import settings from './settings'
import comments from './comments'
// import example from './module-example'
//import chatbot from './chatbot'
import documents from './documents'
import document_type from './document_type'
import information from './information'
import information_category from './information_category'
import information_tags from './information_tags'
import event from './event'
import event_category from './event_category'
import event_tags from './event_tags'
import user from './user'
import features from './features'
import interventions from './interventions'
import topic from './topic'
import user_type from './user_type'

VuexORM.use(VuexORMAxios, { axios })

Vue.use(Vuex)

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(Organization)
database.register(Course)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [VuexORM.install(database)],
    modules: {
      // example
      //    chatbot,
      auth,
      documents,
      document_type,
      information,
      features,
      user,
      flows,
      glossary,
      interventions,
      language,
      settings,
      comments,
      information_category,
      information_tags,
      event,
      event_category,
      event_tags,
      topic,
      user_type
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
    plugins: [createPersistedState()]
  })

  return Store
}
