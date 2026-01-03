
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Machine Learning' | 'Tools';
  level: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
