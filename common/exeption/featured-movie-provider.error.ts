export class FeaturedMovieProviderError extends Error {
  constructor() {
    super('useFeaturedMovie must be used within a FeaturedMovieProvider');
    this.name = 'FeaturedMovieProviderError';
  }
}
