// netlify/functions/subscribe.js
const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const { email } = JSON.parse(event.body)
    
    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Valid email required' })
      }
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email, subscribed_at: new Date() }])

    if (error) throw error

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscribed successfully!' })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    }
  }
}