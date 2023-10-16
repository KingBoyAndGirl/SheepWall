import React from 'react';
import { Link } from 'react-router-dom';
import dy from '@/assets/dy.jpg'
import xhs from '@/assets/xhs.jpg'
import logo from "@/assets/logo.png";

const App = () => {
      const imageStyle = {
            maxWidth: '100%',
            maxHeight: '100%',
      };

      return (
                <div id="about" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                      <div id="header" style={{ backgroundColor: '#ff9900', color: '#fff', textAlign: 'center', padding: '5% 0', width: '80%' }}>
                            <h1>捕捉美好瞬间</h1>
                            <p>眼睛不是摄影机终究会忘记，但是美丽的照片是永恒的</p>
                      </div>
                      <div id="promo-container" style={{ fontSize: '24px', backgroundColor: '#f2f2f2', textAlign: 'center', padding: '5% 0', width: '80%', margin: '0 auto' }}>
                            <div className="promo-text" style={{ background: '#007bff', color: '#fff' }}>点击图片联系</div>
                      </div>
                      <div id="image" style={{ width: '80%',padding: '5%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Link to="https://v.douyin.com/id5BSE8g/">
                                  <img src={dy} alt="点击跳转" style={imageStyle} />
                            </Link>
                            <Link to="https://www.xiaohongshu.com/user/profile/5e2b0aa60000000001004d2b?xhsshare=CopyLink&appuid=5e2b0aa60000000001004d2b&apptime=1697446529">
                                  <img src={xhs} alt="点击跳转" style={imageStyle} />
                            </Link>
                      </div>
                </div>
      );
}

export default App;
