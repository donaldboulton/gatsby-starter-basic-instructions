import React from 'react';

const SocialCard = ({ pageContext: { title, description, height, width } }) => {
    return <div>
              <div>{title}</div>
              <div>{description}</div>
            </div>    
}

export default SocialCard;