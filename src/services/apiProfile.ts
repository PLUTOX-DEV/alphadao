import supabase from './supabaseClient';


type UserProfile = {
  id: string;
  // Add other fields as per your `user_profile` table schema
  wallet_address?: string;
  created_at?: string;
};

type GetUserProfileResult = {
  data: UserProfile | null;
  error: string | null;
};

export async function getUserProfiles(): Promise<GetUserProfileResult> {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    console.error('Error fetching authenticated user:', authError);
    return {
      data: null,
      error: authError?.message || 'No authenticated user found',
    };
  }

  const { data: userProfile, error } = await supabase
    .from('user_profile')
    .select('*')
    .eq('id', user.id) // Assuming "id" in "user_profile" matches "auth.users.id"
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
    return { data: null, error: error.message };
  }

  return { data: userProfile as UserProfile, error: null };
}
