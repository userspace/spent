import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'

const SpentGraph = ({list}) =>
<div className="card">
    <div className="card-header card-header-icon" data-background-color="blue">
        <i className="material-icons">timeline</i>
    </div>
    <div className="card-content">
        <h4 className="card-title">Coloured Line Chart
            <small> - Rounded</small>
        </h4>
    </div>
    <div id="colouredRoundedLineChart" className="ct-chart">
    </div>
</div>

class SpentGraphClass extends React.Component {

  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    let total = 0;
    const list = [].concat(this.props.list).reverse();
    const data = {}
    list.forEach( spent => data[moment(spent.when, "YYYY-MM-DDTHH:mm:ss").format("MM-DD")] = parseInt(spent.cost) )
    const dataColouredRoundedLineChart = {
      labels: [...Object.keys(data)],
      series: [
        Object.keys(data).map( key => total += data[key] ),
        Object.keys(data).map( key => data[key] ),
      ]
    };

    const optionsColouredRoundedLineChart = {
      lineSmooth: Chartist.Interpolation.cardinal({
          tension: 10
      }),
      axisY: {
          showGrid: true,
          offset: 40
      },
      axisX: {
          showGrid: false,
      },
      low: 0,
      showPoint: true,
      height: '300px'
    };


    const colouredRoundedLineChart = new Chartist.Line(
      '#colouredRoundedLineChart',
      dataColouredRoundedLineChart,
      optionsColouredRoundedLineChart
    );

  }

  render() {
    return <SpentGraph />;
  }
}

export default SpentGraphClass
