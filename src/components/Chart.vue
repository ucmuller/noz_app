<script lang='ts'>
import Component from 'vue-class-component'
import { Prop, Mixins } from 'vue-property-decorator'
import Chart from 'chart.js'
import VueChart from 'vue-chartjs'
const Rader = VueChart.Radar
const reactiveProp = VueChart.mixins.reactiveProp

@Component
export default class RaderChart extends Mixins(Rader, reactiveProp) {
  @Prop()
  chartData!: Chart.ChartData

  @Prop()
  options!: Chart.ChartOptions

  get localChartData () {
    return this.chartData
  }

  get localOptions () {
    return this.options
  }

  mounted () {
    this.renderChart(this.localChartData, this.localOptions)
  }
}
</script>
