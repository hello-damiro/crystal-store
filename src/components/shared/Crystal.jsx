import React from 'react';

function Crystal({ color, width, meaning, shadowed, shadowGap }) {
    return (
        <div className="crystal-piece" style={{ width: width + 'px', gap: shadowGap + 'px' }}>
            <div
                className={`crystal ${meaning}`}
                style={{ backgroundColor: color, width: width + 'px' }}
            />
            <div className={`${shadowed ? 'shadow' : ''}`}></div>
        </div>
    );
}

Crystal.defaultProps = {
    width: 100,
    meaning: '',
    shadowed: false,
    shadowGap: 8,
};

export default Crystal;
