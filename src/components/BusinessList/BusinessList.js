import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
render() {
    return (
        <div className="BusinessList">
{this.props.businesses.map((bus, index) => {
    return <Business key={index} business={bus} />;
})}
</div>
    )
}
};

export default BusinessList;
