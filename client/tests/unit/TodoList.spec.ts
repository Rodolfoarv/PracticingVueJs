import { shallowMount, createLocalVue } from '@vue/test-utils';
import CompositionApi from '@vue/composition-api';

import App from "@/App.vue";
import CreateTodo from '@/components/CreateTodo.vue'
import SearchBar from '@/components/utils/SearchBar.vue';
import Pager from '@/components/utils/Pager.vue';



const localVue = createLocalVue();
localVue.use(CompositionApi);
type MyFn = (...args: any[]) => any;

describe('NotesContainer', () => {
  let jsdomAlert: MyFn;
  beforeAll(() => {
    jsdomAlert = window.alert;
    window.alert = () => {};
  });

  afterAll(() => {
    window.alert = jsdomAlert;
  });

  test('show load components', () => {
    const wrapper = shallowMount(App, { localVue });
    expect(wrapper.getComponent(SearchBar).exists()).toBeTruthy();
    expect(wrapper.getComponent(Pager).exists()).toBeTruthy();
  });
});
