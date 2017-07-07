import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import CsvUploader from '../share/csvUploader';

const columns = [{
    header: 'Brand',
    accessor: 'brand',
  }, {
    header: 'Description',
    accessor: 'description',
    sortable: true,
  }, {
    header: 'Created At',
    accessor: 'createdAt'
  }]

const ProductList = (props) => {
  const { data: { allProducts, loading } } = props;
   if (loading) {
     return <div>Loading</div>;
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
    description
    createdAt
  }
}`


const ProductListWithData = graphql(FeedQuery)(Products)

export default  ProductListWithData;