import Vue from "vue";
const EvenBus = new Vue();
export default EvenBus;
const GlobalEventName = {
  getCartTotal: "getCartTotal"
};
export { GlobalEventName };
