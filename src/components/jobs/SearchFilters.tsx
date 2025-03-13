import React, { useState } from 'react';
import { Search, Filter, X, ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const locations = [
  'Seoul, Korea',
  'Singapore',
  'Abu Dhabi, UAE',
  'Los Angeles, USA',
  'London, UK',
  'Tokyo, Japan',
  'Sydney, Australia',
  'Berlin, Germany',
  'Mumbai, India',
  'Paris, France',
];

const roles = [
  'Civil Engineer',
  'Project Manager',
  'Structural Engineer',
  'Safety Officer',
  'Environmental Specialist',
  'Architect',
  'Electrical Engineer',
  'Mechanical Engineer',
  'Site Supervisor',
  'BIM Specialist',
];

const businessAreas = [
  'Building Construction',
  'Infrastructure',
  'Power Plants',
  'Industrial Plants',
  'Environmental Systems',
  'Smart Cities',
  'Oil & Gas',
  'Residential',
  'Commercial',
  'Healthcare',
];

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilter: (filters: FilterState) => void;
}

interface FilterState {
  locations: string[];
  roles: string[];
  businessAreas: string[];
}

const SearchFilters = ({ onSearch, onFilter }: SearchFiltersProps) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    locations: [],
    roles: [],
    businessAreas: [],
  });

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleFilter = (type: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const current = [...prev[type]];
      const index = current.indexOf(value);
      
      if (index === -1) {
        current.push(value);
      } else {
        current.splice(index, 1);
      }
      
      const newFilters = { ...prev, [type]: current };
      onFilter(newFilters);
      return newFilters;
    });
  };

  const clearFilters = () => {
    setFilters({
      locations: [],
      roles: [],
      businessAreas: [],
    });
    onFilter({
      locations: [],
      roles: [],
      businessAreas: [],
    });
  };

  const totalActiveFilters = 
    filters.locations.length + 
    filters.roles.length + 
    filters.businessAreas.length;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8">
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hyundai-blue/20 focus:border-hyundai-blue transition-colors"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <button
            onClick={handleSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-hyundai-blue text-white rounded-md px-4 py-1.5 text-sm font-medium hover:bg-hyundai-lightblue transition-colors"
          >
            Search
          </button>
        </div>
      </div>
      
      <div className="p-4 flex items-center justify-between">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center text-gray-700 hover:text-hyundai-blue transition-colors"
        >
          <Filter size={18} className="mr-2" />
          <span className="font-medium">Filters</span>
          {totalActiveFilters > 0 && (
            <span className="ml-2 bg-hyundai-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalActiveFilters}
            </span>
          )}
        </button>
        
        {totalActiveFilters > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors flex items-center"
          >
            <X size={16} className="mr-1" />
            Clear All
          </button>
        )}
      </div>
      
      {showFilters && (
        <div className="p-4 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <button
                onClick={() => setActiveFilter(activeFilter === 'location' ? null : 'location')}
                className="flex items-center justify-between w-full p-3 border border-gray-200 rounded-lg text-left mb-2"
              >
                <span className="font-medium">Location</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "transition-transform duration-200",
                    activeFilter === 'location' ? "transform rotate-180" : ""
                  )}
                />
              </button>
              
              {activeFilter === 'location' && (
                <div className="max-h-60 overflow-y-auto p-3 border border-gray-200 rounded-lg mb-4">
                  {locations.map((location) => (
                    <label
                      key={location}
                      className="flex items-center space-x-2 py-2 px-1 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={filters.locations.includes(location)}
                        onChange={() => toggleFilter('locations', location)}
                      />
                      <div className={cn(
                        "w-5 h-5 border rounded flex items-center justify-center transition-colors",
                        filters.locations.includes(location)
                          ? "bg-hyundai-blue border-hyundai-blue text-white"
                          : "border-gray-300"
                      )}>
                        {filters.locations.includes(location) && <Check size={14} />}
                      </div>
                      <span>{location}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <button
                onClick={() => setActiveFilter(activeFilter === 'role' ? null : 'role')}
                className="flex items-center justify-between w-full p-3 border border-gray-200 rounded-lg text-left mb-2"
              >
                <span className="font-medium">Job Role</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "transition-transform duration-200",
                    activeFilter === 'role' ? "transform rotate-180" : ""
                  )}
                />
              </button>
              
              {activeFilter === 'role' && (
                <div className="max-h-60 overflow-y-auto p-3 border border-gray-200 rounded-lg mb-4">
                  {roles.map((role) => (
                    <label
                      key={role}
                      className="flex items-center space-x-2 py-2 px-1 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={filters.roles.includes(role)}
                        onChange={() => toggleFilter('roles', role)}
                      />
                      <div className={cn(
                        "w-5 h-5 border rounded flex items-center justify-center transition-colors",
                        filters.roles.includes(role)
                          ? "bg-hyundai-blue border-hyundai-blue text-white"
                          : "border-gray-300"
                      )}>
                        {filters.roles.includes(role) && <Check size={14} />}
                      </div>
                      <span>{role}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <button
                onClick={() => setActiveFilter(activeFilter === 'business' ? null : 'business')}
                className="flex items-center justify-between w-full p-3 border border-gray-200 rounded-lg text-left mb-2"
              >
                <span className="font-medium">Business Area</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "transition-transform duration-200",
                    activeFilter === 'business' ? "transform rotate-180" : ""
                  )}
                />
              </button>
              
              {activeFilter === 'business' && (
                <div className="max-h-60 overflow-y-auto p-3 border border-gray-200 rounded-lg mb-4">
                  {businessAreas.map((area) => (
                    <label
                      key={area}
                      className="flex items-center space-x-2 py-2 px-1 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={filters.businessAreas.includes(area)}
                        onChange={() => toggleFilter('businessAreas', area)}
                      />
                      <div className={cn(
                        "w-5 h-5 border rounded flex items-center justify-center transition-colors",
                        filters.businessAreas.includes(area)
                          ? "bg-hyundai-blue border-hyundai-blue text-white"
                          : "border-gray-300"
                      )}>
                        {filters.businessAreas.includes(area) && <Check size={14} />}
                      </div>
                      <span>{area}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {totalActiveFilters > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.locations.map((location) => (
                <div key={location} className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                  {location}
                  <button
                    onClick={() => toggleFilter('locations', location)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
              
              {filters.roles.map((role) => (
                <div key={role} className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                  {role}
                  <button
                    onClick={() => toggleFilter('roles', role)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
              
              {filters.businessAreas.map((area) => (
                <div key={area} className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                  {area}
                  <button
                    onClick={() => toggleFilter('businessAreas', area)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-4 flex justify-end">
            <Button 
              variant="default" 
              onClick={() => setShowFilters(false)}
              className="bg-hyundai-blue hover:bg-hyundai-blue/90"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
