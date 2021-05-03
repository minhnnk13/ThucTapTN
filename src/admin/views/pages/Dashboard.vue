<template>
  <CChartBar :datasets="defaultDatasets" :labels="labels" />
</template>

<script>
import { CChartBar } from "@coreui/vue-chartjs";

export default {
  components: { CChartBar },
  computed: {
    defaultDatasets() {
      return [
        {
          label: "Đơn hàng",
          backgroundColor: "#f87979",
          data: [40, 20, 12, 39, 40, 40, 39, 80, 40, 20, 12, 11]
        }
      ];
    },

    labels() {
      return [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12"
      ];
    },

    options() {
      return {
        responsive: true,
        maintainAspectRatio: true
      };
    }
  }
};
</script>
