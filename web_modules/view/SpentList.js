import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'

const SpentList = ({list, increment, decrement, remove}) =>
<div id="spent-list" className="col-md-8 col-md-offset-2">
    <h4><small>Últimos 15 movimientos</small></h4>
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th className="text-right">Gasto</th>
                    <th className="text-center">Fecha</th>
                    <th className="text-center">#</th>
                </tr>
            </thead>
            <tbody>
                {list.slice(0,15).map(spent =>
                    <tr key={spent.id}>
                      <td>{spent.name}</td>
                      <td className="text-right">{spent.quantity > 1 ? `(${spent.quantity} x $${spent.cost})` : ''} $ {spent.quantity*spent.cost}</td>
                      <td className="text-center">{moment(spent.when, "YYYY-MM-DDTHH:mm:ss").fromNow()}</td>
                      <td className="td-actions text-center">
                          <button type="button" rel="tooltip" className="btn btn-info" title="mas" onClick={()=>increment(spent)}>
                            <i className="material-icons">add</i>
                          </button>
                          &nbsp;
                          <button type="button" rel="tooltip" className="btn btn-warning" title="menos" disabled={spent.quantity < 2} onClick={()=>decrement(spent)}>
                            <i className="material-icons">remove</i>
                          </button>
                      </td>
                      <td className="td-actions text-center">
                          <button type="button" rel="tooltip" className="btn btn-danger" data-original-title="" title="" onClick={()=>remove(spent)}>
                              <i className="material-icons">delete</i>
                          </button>
                      </td>
                  </tr>
                )}
            </tbody>
        </table>
    </div>
</div>

export default SpentList
