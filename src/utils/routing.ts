// Deep link routing logic based on the requirements
export function getRouteType(id: string): 'unesco' | 'continent' | 'country' | 'city' | 'landmark' {
  // UNESCO sites start with a digit
  if (id.charAt(0).match(/\d/)) {
    return 'unesco';
  }
  
  // Check if it's a continent
  const continents = ['AFRICA', 'ASIA', 'EUROPE', 'NORTH_AMERICA', 'SOUTH_AMERICA', 'OCEANIA', 'ANTARCTICA'];
  if (continents.includes(id.toUpperCase())) {
    return 'continent';
  }
  
  // Country codes are 2 characters
  if (id.length === 2) {
    return 'country';
  }
  
  // City codes are 4 characters
  if (id.length === 4) {
    return 'city';
  }
  
  // Everything else is a landmark (e.g., MA01B)
  return 'landmark';
}

export function isContinent(id: string): boolean {
  const continents = ['AFRICA', 'ASIA', 'EUROPE', 'NORTH_AMERICA', 'SOUTH_AMERICA', 'OCEANIA', 'ANTARCTICA'];
  return continents.includes(id.toUpperCase());
}