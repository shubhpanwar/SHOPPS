// Netlify serverless function to provide admin control panel access
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);
    
    // Admin authentication - in a real app, use environment variables for credentials
    // and implement proper JWT authentication
    const adminCredentials = {
      username: 'admin',
      password: 'shophub2024'
    };
    
    if (data.username === adminCredentials.username && 
        data.password === adminCredentials.password) {
      
      // Generate a simple token (use a proper JWT library in production)
      const token = Buffer.from(`${Date.now()}-${adminCredentials.username}-${Math.random().toString(36).substring(2, 15)}`).toString('base64');
      
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'Authentication successful',
          token: token,
          serverInfo: {
            version: '1.0.0',
            environment: process.env.NODE_ENV || 'development',
            serverTime: new Date().toISOString(),
            features: [
              'product-management',
              'user-management',
              'order-processing',
              'analytics'
            ]
          }
        }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ 
          success: false,
          message: 'Invalid credentials' 
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false,
        message: 'Server error',
        error: error.message 
      }),
    };
  }
}; 