  import React from 'react';

 const Rank = ({name, entries}) => {
 	return (
        <div>
              <div className='center white f3'>
              {`Hello ${name}, Your current entry count is...`}
              </div>
              <div className='center white f1'>
              {entries}
              </div>
        </div>
 	);
 }

 export default Rank;