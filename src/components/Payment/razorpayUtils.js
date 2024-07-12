
const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () =>{
        resolve(true);
      }
      script.onerror = () =>{
        resolve(false);
      }
      document.body.appendChild(script);
    })
  }
  
  export const displayRazorpay = async (amount, onSuccess, onFailure) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res) {
        alert('Check your internet connection... Failed to load payment SDK!');
        return;
    }
  
    const options = {
        key: 'rzp_test_HYKOYkPZ28NGGs',
        currency: 'INR',
        amount: amount * 100,
        name: 'bookName',
        description: 'Thanks for purchasing',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JDk5VUrKUCK9iuJkoELQrkg6fZXWWpfz9b3wVnze7g&s',
        handler: async function(response){
            if (response.razorpay_payment_id) {
                // Payment successful
                await onSuccess(response.razorpay_payment_id);
            } else {
                // Payment unsuccessful
                await onFailure();
            }
        },
        prefill: {
            name: 'code with Goutam',
        }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};