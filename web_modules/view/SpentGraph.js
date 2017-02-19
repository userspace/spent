import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import ChartistGraph from 'react-chartist';

const monthAndDay = when =>
  moment(when, "YYYY-MM-DDTHH:mm:ss").format("MM-DD")

const normalize = list => {
  const values = {};
  [].concat(list)
    .reverse()
    .forEach( spent =>
      values[monthAndDay(spent.when)] += spent.cost * spent.quantity
    );

  let total = 0;
  return {
    labels: [...Object.keys(values)],
    series: [
      Object.keys(values).map( key => total += values[key] ),
      Object.keys(values).map( key => values[key] ),
    ]
  };
}

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
    <ChartistGraph data={normalize(list)} type={'Line'} options={{axisX: { showGrid: false, }, low: 0 }}/>
</div>


export default SpentGraph
