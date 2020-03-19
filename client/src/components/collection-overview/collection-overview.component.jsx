import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

import CollectionContext from '../../context/collections/collections.context';

const CollectionsOverview = ( ) => {
  const collections = Object.values(useContext(CollectionContext))
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
};

export default CollectionsOverview;