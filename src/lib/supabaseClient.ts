import { createClient } from "@supabase/supabase-js";

// DEPRECATED: Use @/integrations/supabase/client instead
// This file exists for backwards compatibility only

import { supabase as supabaseClient } from "@/integrations/supabase/client";

export const supabase = supabaseClient;