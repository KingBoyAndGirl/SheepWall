import React from 'react';

const App = () => {
      return (
                <div id="about" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '62vh' }}>
                      <div id="header" style={{ backgroundColor: '#ff9900', color: '#fff', textAlign: 'center', padding: '5% 0', width: '80%' }}>
                            <h1>摄影摆摊──捕捉美好瞬间</h1>
                            <p>眼睛不是摄影机终究会忘记，但是美丽的照片是永恒的</p>
                      </div>
                      <div id="content" style={{ width: '100%' }}>
                            <div id="promo-container" style={{ fontSize: '24px', backgroundColor: '#f2f2f2', textAlign: 'center', padding: '5% 0', width: '80%', margin: '0 auto' }}>
                                  <div className="promo-text" style={{ background: '#ff9900', color: '#fff' }}>照片：5元/张</div>
                                  <div className="promo-text" style={{ background: '#28a745', color: '#fff' }}>相框：10元/个</div>
                                  <div className="promo-text" style={{ background: '#007bff', color: '#fff' }}>满三送一</div>
                            </div>
                            <div id="pricing-container" style={{ fontSize: '24px', backgroundColor: '#f2f2f2', textAlign: 'center', padding: '0px 0px 5% 0px', width: '80%', margin: '0 auto' }}>
                                  <div className="pricing">打印价格</div>
                                  <div className="pricing">10元1张</div>
                                  <div className="pricing">25元3张</div>
                                  <div className="pricing">40元5张</div>
                                  <div className="pricing">60元8张</div>
                            </div>
                      </div>
                </div>
      );
}

export default App;
