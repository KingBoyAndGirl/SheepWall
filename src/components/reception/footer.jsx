import '@/style/reception/footer.scss';

const Footer = () => {
  const douyinLink = "https://v.douyin.com/id5BSE8g/"; // 将 "抖音跳转链接" 替换为实际的抖音跳转链接
  const xiaohongshuLink = "https://www.xiaohongshu.com/user/profile/5e2b0aa60000000001004d2b?xhsshare=CopyLink&appuid=5e2b0aa60000000001004d2b&apptime=1697446529"; // 将 "小红书跳转链接" 替换为实际的小红书跳转链接

  // Must add passHref to Link
  return (
            <footer className='footer'>
              <div>
                <div style={{ marginTop: '30px' }}>
                  所有作品均由小王摄影拍摄: <br/>
                  <a href={douyinLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#ff0000' }}>
                    <i className="fab fa-tiktok"></i> 抖音：XWSY688
                  </a>

                  <br/>
                  <a href={xiaohongshuLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#ff0000' }}>
                    <i className="fab fa-xing"></i> 小红书：小王摄影
                  </a>  <br/>
                  转载必须征得本人同意后，方可转载！！！
                </div>
                <div>&copy; 小王摄影 2022-2023</div>
              </div>
            </footer>
  );
}

export default Footer;
