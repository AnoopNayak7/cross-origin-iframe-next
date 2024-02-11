import React, { useRef } from 'react';

const LoginPage = () => {
  const iframeRef = useRef(null);

  const generateToken = async () => {
    const token = Math.random().toString(36).substring(7);
    localStorage.setItem('sessionId', token);

    if (localStorage.getItem('sessionId')) {
      let postData = localStorage.getItem('sessionId');
      await postMessageToIframe(postData);
      openNewTab('http://localhost:5432/');
    }
  };

  const postMessageToIframe = (postData:string) => {
    return new Promise<void>((resolve, reject) => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(postData, 'http://localhost:5432/');
        resolve();
      } else {
        reject(new Error('iframeRef is not available'));
      }
    });
  };

  const openNewTab = (url:string) => {
    window.open(url, '_blank');
  };

  return (
    <div className='h-[80vh] flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-xl mb-10'>Backoffice Login</h1>
        <iframe
          ref={iframeRef}
          src="http://localhost:5432/"
          width="0"
          height="0"
          title="External Site"
        ></iframe>
        <button className='border px-4 py-2 rounded-md bg-gray-700 text-white' onClick={generateToken}>Login to selfcare</button>
      </div>
    </div>
  );
};

export default LoginPage;
