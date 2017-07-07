import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';
import ReactTable from 'react-table'
import RaisedButton from 'material-ui/RaisedButton';
import 'react-table/react-table.css'
import CsvUploader from '../share/csvUploader';
import SimpleImageUploader from '../share/simpleImageUploader';
import WebSubCatMultiSelect from '../share/webSubCatMultiSelect';

import img from '../share/image.png';


const columns = [{
    Header: 'Thumbnail',
    accessor: 'Thumbnail',
    Cell: props => (<img src={props.original.url === null ? img : props.original.url} alt="" style={{width: 40, height: 40}}/>)
  },{
    Header: 'Brand',
    accessor: 'brand',
  }, {
    Header: 'Name',
    accessor: 'reference',
    sortable: true,
  },{
    Header: 'Unit Weight',
    accessor: 'unitWeight',
  },{
    Header: 'Price',
    accessor: 'price',
  },{
    Header: 'Wholesale Price',
    accessor: 'wholesalePrice',
  },{
    Header: 'Unit Price',
    accessor: 'unitPrice',
  },{
    Header: 'Actions',
    accessor: 'Actions',
    Cell: props => (<SimpleImageUploader {...props}/>)
},{
    Header: 'Sub Category',
    accessor: 'SubCategory',
    Cell: props => (<WebSubCatMultiSelect {...props}/>)
}]

const ProductList = (props) => {
  const { data: { allProducts, loading } } = props;
   if (loading) {
     return <center>Loading...</center>;
   } else {
     return (
       <div className="App">
        <ReactTable className="-striped -highlight"
          data={allProducts}
          columns={columns}     
        />
       </div>
     );
  } 
} 

class Products extends Component {
    render() {
        return (
            <div className="App">
                <CsvUploader/>
                <ProductList {...this.props}/>
            </div>
        );
    }
}

Products.propTypes = {
  data: PropTypes.object.isRequired,
};

const FeedQuery = gql`query allProducts {
  allProducts(orderBy: createdAt_DESC) {
    id
    brand
    reference
    price
    unitPrice
    description
    wholesalePrice
    reference
    url
    createdAt
    updatedAt
  }
}`


const ProductListWithData = graphql(FeedQuery)(Products)

export default  ProductListWithData;