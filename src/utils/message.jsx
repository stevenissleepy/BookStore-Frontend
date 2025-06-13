async function handleApiResponse(ok, messageApi, successMsg, failMsg,  onOk, onFail) {
  if(ok) {
    messageApi && successMsg && messageApi.success(successMsg, 0.6);
    onOk && onOk();
  }else {
    messageApi && failMsg && messageApi.error(failMsg, 0.6);
    onFail && onFail();
  }
}

export { handleApiResponse }