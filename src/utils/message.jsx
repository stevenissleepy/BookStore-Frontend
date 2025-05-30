async function handleApiResponse(ok, messageApi, successMsg, failMsg,  onOk, onFail) {
  if(ok) {
    messageApi && successMsg && messageApi.success(successMsg, 0.5);
    onOk && onOk();
  }else {
    messageApi && failMsg && messageApi.error(failMsg, 0.5);
    onFail && onFail();
  }
}

export { handleApiResponse }