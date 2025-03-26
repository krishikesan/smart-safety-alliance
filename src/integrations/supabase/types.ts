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
      crime_reports: {
        Row: {
          category: string
          description: string
          id: string
          location: unknown
          media_urls: string[] | null
          metadata: Json | null
          reported_at: string | null
          reported_by: string | null
          severity: number
          status: string
        }
        Insert: {
          category: string
          description: string
          id?: string
          location: unknown
          media_urls?: string[] | null
          metadata?: Json | null
          reported_at?: string | null
          reported_by?: string | null
          severity: number
          status?: string
        }
        Update: {
          category?: string
          description?: string
          id?: string
          location?: unknown
          media_urls?: string[] | null
          metadata?: Json | null
          reported_at?: string | null
          reported_by?: string | null
          severity?: number
          status?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          badge_number: string | null
          contact_number: string | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          precinct: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          badge_number?: string | null
          contact_number?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          precinct?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          badge_number?: string | null
          contact_number?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          precinct?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      resource_deployments: {
        Row: {
          deployed_at: string | null
          id: string
          last_updated: string | null
          location: unknown
          officer_id: string | null
          resource_type: string
          status: string | null
        }
        Insert: {
          deployed_at?: string | null
          id?: string
          last_updated?: string | null
          location: unknown
          officer_id?: string | null
          resource_type: string
          status?: string | null
        }
        Update: {
          deployed_at?: string | null
          id?: string
          last_updated?: string | null
          location?: unknown
          officer_id?: string | null
          resource_type?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "resource_deployments_officer_id_fkey"
            columns: ["officer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      safety_alerts: {
        Row: {
          area_affected: unknown | null
          created_at: string | null
          created_by: string | null
          description: string
          end_time: string | null
          id: string
          radius: number | null
          severity: string
          start_time: string | null
          title: string
        }
        Insert: {
          area_affected?: unknown | null
          created_at?: string | null
          created_by?: string | null
          description: string
          end_time?: string | null
          id?: string
          radius?: number | null
          severity: string
          start_time?: string | null
          title: string
        }
        Update: {
          area_affected?: unknown | null
          created_at?: string | null
          created_by?: string | null
          description?: string
          end_time?: string | null
          id?: string
          radius?: number | null
          severity?: string
          start_time?: string | null
          title?: string
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
