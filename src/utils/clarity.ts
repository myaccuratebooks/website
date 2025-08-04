/**
 * Initialize Microsoft Clarity only in production environment
 * Handles cases where the script might be blocked by ad blockers
 */
export const initializeClarity = () => {
  if (import.meta.env.PROD) {
    try {
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "rlvcl5f8mq");
    } catch (error) {
      // Silently handle cases where the script is blocked
      console.debug('Clarity initialization skipped - likely blocked by privacy tools');
    }
  }
}; 