import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Publishable Key is missing! Check your .env file.')
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '')

// Perform a simple connection test
supabase
  .from('caregiver_requests')
  .select('*', { count: 'estimated', head: true })
  .limit(1)
  .then(({ error }) => {
    if (error) {
      console.error('Supabase connection test failed:', error.message)
    } else {
      console.log('Supabase connection test successful!')
    }
  })
