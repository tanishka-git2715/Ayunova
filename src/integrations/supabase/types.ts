export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      chat_messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          role: string
          session_id: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          role: string
          session_id: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          role?: string
          session_id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      consultations: {
        Row: {
          consultation_type: string | null
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string
          notes: string | null
          practitioner_id: string | null
          scheduled_at: string | null
          status: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          consultation_type?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          practitioner_id?: string | null
          scheduled_at?: string | null
          status?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          consultation_type?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          practitioner_id?: string | null
          scheduled_at?: string | null
          status?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
      dosha_assessments: {
        Row: {
          assessment_data: Json
          completed_at: string | null
          id: string
          kapha_score: number
          pitta_score: number
          primary_dosha: string
          secondary_dosha: string | null
          user_id: string | null
          vata_score: number
        }
        Insert: {
          assessment_data: Json
          completed_at?: string | null
          id?: string
          kapha_score?: number
          pitta_score?: number
          primary_dosha: string
          secondary_dosha?: string | null
          user_id?: string | null
          vata_score?: number
        }
        Update: {
          assessment_data?: Json
          completed_at?: string | null
          id?: string
          kapha_score?: number
          pitta_score?: number
          primary_dosha?: string
          secondary_dosha?: string | null
          user_id?: string | null
          vata_score?: number
        }
        Relationships: []
      }
      lifestyle_logs: {
        Row: {
          created_at: string | null
          energy_level: number | null
          exercise_minutes: number | null
          id: string
          log_date: string
          meals_data: Json | null
          meditation_minutes: number | null
          mood: number | null
          notes: string | null
          sleep_hours: number | null
          sleep_quality: number | null
          stress_level: number | null
          user_id: string | null
          water_intake: number | null
        }
        Insert: {
          created_at?: string | null
          energy_level?: number | null
          exercise_minutes?: number | null
          id?: string
          log_date?: string
          meals_data?: Json | null
          meditation_minutes?: number | null
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          user_id?: string | null
          water_intake?: number | null
        }
        Update: {
          created_at?: string | null
          energy_level?: number | null
          exercise_minutes?: number | null
          id?: string
          log_date?: string
          meals_data?: Json | null
          meditation_minutes?: number | null
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          user_id?: string | null
          water_intake?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          constitution_type: string | null
          created_at: string | null
          date_of_birth: string | null
          email: string | null
          full_name: string | null
          gender: string | null
          health_goals: string[] | null
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          constitution_type?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          health_goals?: string[] | null
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          constitution_type?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          health_goals?: string[] | null
          id?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      wellness_plans: {
        Row: {
          created_at: string | null
          description: string | null
          diet_recommendations: Json | null
          herbal_recommendations: Json | null
          id: string
          lifestyle_recommendations: Json | null
          meditation_practices: Json | null
          title: string
          updated_at: string | null
          user_id: string | null
          yoga_practices: Json | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          diet_recommendations?: Json | null
          herbal_recommendations?: Json | null
          id?: string
          lifestyle_recommendations?: Json | null
          meditation_practices?: Json | null
          title: string
          updated_at?: string | null
          user_id?: string | null
          yoga_practices?: Json | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          diet_recommendations?: Json | null
          herbal_recommendations?: Json | null
          id?: string
          lifestyle_recommendations?: Json | null
          meditation_practices?: Json | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
          yoga_practices?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
