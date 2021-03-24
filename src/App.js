import React, {Component} from 'react';
import FeaturedMix from './components/FeaturedMix';
import Header from './components/Header'; 

class App extends Component {
  render() {
    return (
      <div>
        {/* this div contians our page (excluding audio player) */}
        <div className="flex-l justify-end">
          {/* FeaturedMix (needs styling and updating) */}
          <FeaturedMix />
          <div className="w-50-l relative z-1">
            {/* Header (needs styling and updating)  */}
            <Header />
            {/* Routed page */}
          </div>
        </div>
        {/* AudioPlayer */}
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Fthe-early-bird-show-w-rory-bowens-23rd-march-2021%2F"
          frameBorder="0"
          className="db fixed bottom-0 z-5"
        />
      </div>
    )
  }
}

export default App;
