import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'

const SpentGraph = ({list}) =>
<div className="card">
    <div className="card-header card-header-icon" data-background-color="blue">
        <i className="material-icons">timeline</i>
    </div>
    <div className="card-content">
        <h4 className="card-title">Gastos de los últimos días
            <small>Acumulado</small>
        </h4>
    </div>
    <div id="colouredRoundedLineChart" className="ct-chart">
    </div>
</div>

const monthAndDay = when =>
  moment(when, "YYYY-MM-DDTHH:mm:ss").format("MM-DD")

class SpentGraphClass extends React.Component {

  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    const values = {};
    [].concat(this.props.list)
      .reverse()
      .forEach( spent =>
        values[monthAndDay(spent.when)] = spent.cost * spent.quantity
      );

    let total = 0;
    const data = {
      labels: [...Object.keys(values)],
      series: [
        Object.keys(values).map( key => total += values[key] ),
        Object.keys(values).map( key => values[key] ),
      ]
    };

    const options = {
      lineSmooth: Chartist.Interpolation.cardinal({tension: 10}),
      axisY: { showGrid: true, offset: 40 },
      axisX: { showGrid: false, },
      low: 0,
      showPoint: true,
      height: '300px'
    };

    const colouredRoundedLineChart = new Chartist.Line(
      '#colouredRoundedLineChart', data, options
    );
  }

  render() {
    return <SpentGraph />;
  }
}

export default SpentGraphClass
