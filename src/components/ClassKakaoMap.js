import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassKakaoMap extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        const memberList = [
            { name: '김일국', email: 'admin@test.com' }, { name: '사용자', email: 'user@test.com' },
        ];
        return (
            <div>
                {memberList.map((member) => <div style={{border:'1px solid red'}} key={member.email}>{member.name}</div>)}
            </div>
        );
    }
}

ClassKakaoMap.propTypes = {

};

export default ClassKakaoMap;