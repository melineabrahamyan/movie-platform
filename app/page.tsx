import Featured from '@/components/Featured';
import Menu from '@/components/Menu';
import TrendingNow from '@/components/TrendingNow';
import { FeaturedMovieProvider } from '@/context/FeaturedMovieContext';

export default function Home() {
  return (
    <FeaturedMovieProvider>
      <div className="flex h-full overflow-hidden">
        <Menu />
        <div className="ml-[110px] flex h-screen w-full flex-col overflow-hidden">
          <div className="w-full flex-1">
            <Featured />
          </div>
          <div className="h-1/3 max-h-[300px] w-full">
            <TrendingNow />
          </div>
        </div>
      </div>
    </FeaturedMovieProvider>
  );
}
