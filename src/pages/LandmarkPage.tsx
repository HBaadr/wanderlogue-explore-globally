import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, ExternalLink, Camera } from 'lucide-react';
import { useFirestoreDocument } from '@/hooks/useFirestore';
import { useLanguage } from '@/contexts/LanguageContext';
import { Landmark } from '@/types/travel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

interface LandmarkPageProps {
  landmarkCode: string;
}

const LandmarkPage = ({ landmarkCode }: LandmarkPageProps) => {
  const { language, getLocalizedField } = useLanguage();
  
  const { data: landmark, loading: landmarkLoading } = useFirestoreDocument<Landmark>(
    'Landmarks', 
    landmarkCode
  );

  if (landmarkLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-32 mb-6" />
        <Skeleton className="h-12 w-64 mb-4" />
        <Skeleton className="h-64 w-full mb-8" />
      </div>
    );
  }

  if (!landmark) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-destructive mb-4">Landmark not found</h1>
        <Link to="/" className="text-primary hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back navigation */}
        <Link 
          to={`/${landmark.city_code}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground smooth-transition mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to City
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Landmark header */}
            <div>
              <h1 className="travel-heading mb-4">
                {getLocalizedField('name', landmark)}
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>{landmark.type}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Code: {landmark.landmark_code}</span>
                </div>
                {landmark.latitude && landmark.longitude && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>{landmark.latitude.toFixed(4)}, {landmark.longitude.toFixed(4)}</span>
                  </div>
                )}
              </div>

              {/* Address */}
              {getLocalizedField('address', landmark) && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    {getLocalizedField('address', landmark)}
                  </p>
                </div>
              )}
            </div>

            {/* Main image */}
            {landmark.image && (
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden travel-shadow">
                <img
                  src={landmark.image}
                  alt={getLocalizedField('name', landmark)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            )}

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About {getLocalizedField('name', landmark)}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {getLocalizedField('description', landmark)}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Types */}
            {getLocalizedField('types', landmark) && (
              <Card>
                <CardHeader>
                  <CardTitle>Landmark Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {getLocalizedField('types', landmark)}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Wikipedia link */}
            {getLocalizedField('wikipedia', landmark) && (
              <Card>
                <CardHeader>
                  <CardTitle>Learn More</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <a 
                      href={getLocalizedField('wikipedia', landmark)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Read on Wikipedia
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Image gallery */}
            {landmark.images && landmark.images.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Image Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {landmark.images.slice(0, 6).map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${getLocalizedField('name', landmark)} - Image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 smooth-transition"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick facts */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium">{landmark.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">City Code:</span>
                  <span className="font-medium">{landmark.city_code}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Country:</span>
                  <span className="font-medium">{landmark.country_code}</span>
                </div>
                {landmark.latitude && landmark.longitude && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Latitude:</span>
                      <span className="font-medium">{landmark.latitude.toFixed(6)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Longitude:</span>
                      <span className="font-medium">{landmark.longitude.toFixed(6)}</span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Map placeholder - could integrate with Google Maps */}
            {landmark.latitude && landmark.longitude && (
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm">Map View</p>
                      <p className="text-xs">
                        {landmark.latitude.toFixed(4)}, {landmark.longitude.toFixed(4)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandmarkPage;