import {MutationTree} from "vuex"
import { Manifest, State } from './generator.state'
import {types} from './generator.types'

export const mutations: MutationTree<State> = {
    [types.UPDATE_MANIFEST](state, manifest: Manifest): void {
        state.manifest = manifest;
    },
}