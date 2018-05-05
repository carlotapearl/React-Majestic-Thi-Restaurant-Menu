import React, {Component} from 'react';

export default class Desserts extends Component {

  render(){
    // Set items' value....
    let items = this.props.desserts;
    // Since the items do not have a key, let's create one.
    let key = 0;
    let desserts = items.map((items)=>{
      // Increment the key for each item.
      key++;
      console.log(key)
      console.log(items);
      return (
        <tbody key={key}>
           <tr>
             <td>{items.dish}</td>
             <td>{items.description}</td>
             <td>{items.price}</td>
           </tr>
        </tbody>
      )
    })
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h4>Desserts</h4>
          <table className="table">
            <thead>
              <tr>
                <th className="col-md-3">Dish</th>
                <th className="col-md-8">Description</th>
                <th className="col-md-1">Price</th>
              </tr>
            </thead>
            {desserts}
          </table>
        </div>
      </div>
    );
  }
}
