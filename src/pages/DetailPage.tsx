import React from 'react';
import { useParams } from 'react-router-dom';
import { getRouteType } from '@/utils/routing';
import ContinentPage from './ContinentPage';
import CountryPage from './CountryPage';
import CityPage from './CityPage';
import LandmarkPage from './LandmarkPage';
import UnescoPage from './UnescoPage';
import NotFound from './NotFound';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <NotFound />;
  }

  const routeType = getRouteType(id);

  switch (routeType) {
    case 'continent':
      return <ContinentPage continentId={id} />;
    case 'country':
      return <CountryPage countryCode={id} />;
    case 'city':
      return <CityPage cityCode={id} />;
    case 'landmark':
      return <LandmarkPage landmarkCode={id} />;
    case 'unesco':
      return <UnescoPage unescoId={id} />;
    default:
      return <NotFound />;
  }
};

export default DetailPage;